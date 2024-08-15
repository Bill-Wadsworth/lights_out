const Toggle = ({toggleState, setToggle}: {toggleState: boolean, setToggle: (newState: boolean) => void}) => {

    return (
        <button
            className="w-20 h-10 bg-slate-400 hover:drop-shadow rounded-full flex items-center justify-start m-4 "
            onClick={() => setToggle(!toggleState)}>
            <div
                className={"w-12 h-12 rounded-full transition duration-200 p-1 " +(toggleState ? " translate-x-full bg-blue-500" : " -translate-x-5 bg-slate-700" ) } >

            </div>
        </button>

    )
}

export default Toggle;