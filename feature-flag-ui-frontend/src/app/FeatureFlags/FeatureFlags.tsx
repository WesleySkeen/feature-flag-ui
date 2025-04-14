import {useEffect} from "react";
import {FeatureFlag} from "../../shared/interfaces/feature-flags.interface.ts";
import loading_spinner from "../../assets/loading-spinner.svg";

function FeatureFlags() {

    function setData(featureFlags: FeatureFlag[]) {
        console.log("featureFlags", featureFlags);
    }

    function getFeatureFlags(): Promise<FeatureFlag[]> {
        return (async () => {
            const json = await import("../../shared/exampe-feature-flags.json");
            const featureFlags: FeatureFlag[] = JSON.parse(JSON.stringify(json));
            return featureFlags;
        })();
    }

    useEffect(() => {
        async function fetchFeatureFlags() {
            try {
                const featureFlags = await getFeatureFlags();
                setData(featureFlags);
            } catch (error) {
                console.error(error);
            }
        }

        fetchFeatureFlags();
    }, [])

    return (
        <>
            <img src={loading_spinner} className="loading-spinner" alt="loading feature flags logo"/>
            <h1>Loading Feature Flags</h1>
        </>
    )


}

export default FeatureFlags