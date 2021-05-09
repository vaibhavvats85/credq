export interface InfoProps {
    children?: any;
    data: any;
}
const Info: React.FC<InfoProps> = (props) => {
    return (
        <>
            {
                props.data.map((questions: any) => {
                    return (
                        <>
                            <h2>{questions.ques}</h2>
                            {questions.ans.map((ans: string) => <p>{ans}</p>)}
                        </>
                    )
                })
            }
        </>
    )
}
export default Info;