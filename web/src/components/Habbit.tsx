interface HabbitPrpos {
    completed: number
}

function Habbit(props: HabbitPrpos) {
    return (
        <>
            <div className="bg-zinc-900 w-10 text-white rounded m-2 text-center flex items-center justify-center">
                {props.completed}
            </div>
        </>
    )
}
export default Habbit