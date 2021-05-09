import './styles.scss';

export interface BgVideoProps {
    className?: string;
    children?: any;
}

const BgVideo: React.FC<BgVideoProps> = (props: BgVideoProps) => {
    return (
        <div className="bg-video">
            <video autoPlay muted loop className="myVideo">
                <source src={`${process.env.PUBLIC_URL}/assets/background_clip.mp4`} type="video/mp4" />
                Your browser does not support HTML5 video.
            </video>
            <div className="bg"></div>
            <div className={`${props.className} bg-content`}>
                {props.children}
            </div>
        </div>
    )
}
export default BgVideo;