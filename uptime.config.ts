// This is a simplified example config file for quickstart
// Some not frequently used features are omitted/commented out here
// For a full-featured example, please refer to `uptime.config.full.ts`

// Don't edit this line
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  // Title for your status page
  title: "Eurth Community Status Page",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://github.com/stijn', label: 'GitHub' },
    { link: 'https://eurth.org/', label: 'Forum' },
    { link: 'mailto:orioni.europa@gmail.com', label: 'Email Me', highlight: true },
  ],
}

const workerConfig: WorkerConfig = {
  // Define all your monitors here
  monitors: [
    // -------------------------------------
    // Monitor 1: eurth_homepage
    // -------------------------------------
    {
      id: 'eurth_homepage',
      name: 'Eurth Org Main Site',
      method: 'GET',
      target: 'https://eurth.org',
      tooltip: 'Primary homepage monitor',
      statusPageLink: 'https://eurth.org',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
        Authorization: 'Bearer YOUR_TOKEN_HERE',
      }, // <-- Closes the headers object
    }, // <-- Closes the first monitor object

    // -------------------------------------
    // Monitor 2: europans_homepage
    // -------------------------------------
    {
      id: 'europans_homepage',
      name: 'Europans Com Main Site',
      method: 'GET',
      target: 'https://www.europans.com',
      tooltip: 'Primary homepage monitor',
      statusPageLink: 'https://www.europans.com',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
        Authorization: 'Bearer YOUR_TOKEN_HERE',
      }, // <-- Closes the headers object
    }, // <-- Closes the second monitor object

    // -------------------------------------
    // Monitor 3: iiwiki_homepage
    // -------------------------------------
    {
      id: 'iiwiki_homepage',
      name: 'IIWiki Com Main Site',
      method: 'GET',
      target: 'https://iiwiki.com',
      tooltip: 'Primary homepage monitor',
      statusPageLink: 'https://iiwiki.com',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
        Authorization: 'Bearer YOUR_TOKEN_HERE',
      }, // <-- Closes the headers object
    }, // <-- Closes the third monitor object
  ], // <-- Closes the monitors array

  // [Optional] Notification settings
  notification: {
    webhook: {
      url: 'https://api.telegram.org/bot123456:ABCDEF/sendMessage',
      payloadType: 'x-www-form-urlencoded',
      payload: {
        chat_id: 12345678,
        text: '$MSG',
      },
      timeout: 10000,
    },
    timeZone: 'Europe/London',
    gracePeriod: 5,
  },
} // <-- Closes workerConfig object

const maintenances: MaintenanceConfig[] = [
  /*
  {
    monitors: ['foo_monitor', 'bar_monitor'],
    title: 'Test Maintenance',
    body: 'This is a test maintenance, server software upgrade',
    start: '2020-01-01T00:00:00+08:00',
    end: '2050-01-01T00:00:00+08:00',
    color: 'blue',
  },
  */
] // <-- Closes maintenances array

// Don't edit this line
export { maintenances, pageConfig, workerConfig }
