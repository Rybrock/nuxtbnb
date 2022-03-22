export default function(context, inject) {
    const appId = "4FXCPWSAAM";
    const apiKey = "c7ece0e5af5b9c5b22a1351b1ce2450d";

    inject('dataApi', {
        getHome
    });

    async function getHome(homeId) {
        const response = await fetch(`https://${appId}-dsn.algolia.net/1/indexes/homes/${homeId}`, {
            headers: {
                "X-Algolia-API-Key": apiKey,
                "X-Algolia-Application-Id": appId
            }
        })
        const json = await response.json()
        return json
    }
}