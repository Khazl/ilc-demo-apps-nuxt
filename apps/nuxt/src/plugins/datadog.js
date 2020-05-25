/**
 * Nuxt wrapper for `@datadog/browser-logs`
 * https://docs.datadoghq.com/logs/log_collection/javascript/?tab=eu
 * https://github.com/DataDog/browser-sdk/tree/master/packages/logs
 */

import { datadogLogs } from '@datadog/browser-logs'

export default ({ app }) => {
    // IMPORTANT: app.$env.DATADOG_CLIENT_TOKEN should not be set in the nuxt.config.js,
    // but instead in the values-production.yaml file (`env` section) and corresponding
    // ssr.template.env file in your projects HELM setup.
    if (app.$env.DATADOG_CLIENT_TOKEN !== '') {
        datadogLogs.init({
            clientToken: `${app.$env.DATADOG_CLIENT_TOKEN}`,
            datacenter: 'eu',
            forwardErrorsToLogs: true,
            sampleRate: 100
        })

        datadogLogs.addLoggerGlobalContext('service', 'YOUR-SERVICE-NAME') // Use to identify your service in DataDog
        datadogLogs.addLoggerGlobalContext('app', 'YOUR-PROJECT-NAME') // Use to group your services like bff and frontend in DataDog
        datadogLogs.addLoggerGlobalContext('env', 'production') // Use to set the environment of the logs
    }
}
