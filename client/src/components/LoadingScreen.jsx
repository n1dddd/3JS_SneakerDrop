import { useProgress } from "@react-three/drei"


const LoadingScreen = ({ started, onStarted}) => {
    const { progress } = useProgress();

    console.log(progress);
    return (
        <div className={`loadingScreen ${started ? "loadingScreen--started" : ""}`}>
            <div className="loadingScreen__board">
                <h1 className="loadingScreen__title">Preparing Your Jordan 1 Experience...</h1>
                <button
                    className="loadingScreen__button"
                    disabled={progress < 100}
                    onClick={onStarted}
                >
                    Start
                </button>
            </div>
        </div>
    )
}

export default LoadingScreen;