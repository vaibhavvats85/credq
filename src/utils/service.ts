import * as constants from './constants';
import axios from "axios";
import credq from '../assets/credq_logo.png';
import { PlanRequest, User } from "../models";
import { trackPromise } from 'react-promise-tracker';

export const scrollToView = (path: string) => {
    const elem = document.getElementById(`#${path}`);
    elem?.scrollIntoView({ behavior: "smooth", block: 'center' });
}

export const setCookie = (cname: string, cvalue: string, exdays: number) => {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

export const getCookie = (cname: string) => {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

export const loadScript = (src: string) => {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            resolve(false);
        };
        document.body.appendChild(script);
    });
};

export const displayRazorpay = async (user: User, planRequest: PlanRequest, successCb: Function) => {
    const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
    }

    // creating a new order
    const result = await trackPromise(axios.post(`${constants.BASE_URL}/payment/orders`, planRequest));

    if (!result) {
        alert("Server error. Are you online?");
        return;
    }

    // Getting the order details back
    const { amount, id: order_id, currency, razorpay_key } = result.data;

    const options = {
        key: razorpay_key, // Enter the Key ID generated from the Dashboard
        amount: amount.toString(),
        currency: currency,
        name: user.organization,
        description: `${planRequest.plan} Billing`,
        image: credq,
        order_id: order_id,
        handler: async (response: any) => {
            const data = {
                orderCreationId: order_id,
                razorpayPaymentId: response.razorpay_payment_id,
                razorpayOrderId: response.razorpay_order_id,
                razorpaySignature: response.razorpay_signature,
                user,
                amount,
                plan: planRequest.plan
            };

            await trackPromise(axios.post(`${constants.BASE_URL}/payment/success`, data));
            successCb();
            alert('Payment successful');
        },
        prefill: {
            name: user.organization,
            email: user.email,
            contact: user.phone,
        },
        theme: {
            color: "#0071bc",
        },
    };

    const paymentObject = new (window as any).Razorpay(options);
    paymentObject.open();
}