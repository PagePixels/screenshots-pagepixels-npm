# PagePixels Screenshots for NPM

PagePixels is an API and web interface that provides automated screenshot capturing and change notifications for your web pages. With the PagePixels NPM Package, you can easily capture immediate screenshots, schedule recurring screenshots, set up change notifications, and use multi-step screenshotting functionality to complete forms, click links, and login to websites prior to taking screenshots.

## Getting Started
To use PagePixels, sign up for a free account and obtain your API key. No payment information is required. You can sign up and create an API key by visiting the PagePixels website https://pagepixels.com.

Once you have your API key, you can start making requests to the API.

## Installation

To install the `pagepixels-screenshots` package, you can use the following command:

```
npm install pagepixels-screenshots
```

Alternatively, you can add the following line to your `package.json`:

```json
{
  "dependencies": {
    "pagepixels-screenshots": "^1.0.0"
  }
}
```

And then run `npm install` to install the package.

Once the package is installed, you can require it in your Node.js code:

```javascript
const ScreenshotsPagepixels = require('pagepixels-screenshots');
```

## Usage
The `pagepixels-screenshots` package provides a simple and intuitive way to interface with the PagePixels API. The `ScreenshotsPagepixelsClient` class provides the following methods.

Learn more about configuring your screenshot options here: 

https://pagepixels.com/app/documentation#api-options

### `snap(options = {})`
Captures a screenshot of a web page immediately.

```javascript
const ScreenshotsPagepixels = require('pagepixels-screenshots');

const client = new ScreenshotsPagepixels('your-api-key');
const options = { url: 'https://www.example.com' };
client.snap(options)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });
```

### `createScreenshotConfig(options = {})`
Creates a new screenshot configuration, which can include an automatically recurring schedule, multi-step configurations, and more. 

Learn more about multi-step (click links, complete forms, login to websites, etc) functionality here: 

https://pagepixels.com/app/documentation#multi-step-screenshots

Learn more about configuring scheduled screenshots here: 

https://pagepixels.com/app/documentation#scheduled-screenshots

```javascript
const ScreenshotsPagepixels = require('pagepixels-screenshots');

const client = new ScreenshotsPagepixels('your-api-key');
const options = { url: 'https://www.example.com', scheduled_screenshot: true, scheduled_every: 1, scheduled_interval: 'days' };
client.createScreenshotConfig(options)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });
```

### `screenshotConfigs(options = {})`
Allows you to retrieve your screenshot configurations.

```javascript
const ScreenshotsPagepixels = require('pagepixels-screenshots');

const client = new ScreenshotsPagepixels('your-api-key');
client.screenshotConfigs()
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });
```

### `getScreenshotConfig(id)`
Gets a specific screenshot configuration.

```javascript
const ScreenshotsPagepixels = require('pagepixels-screenshots');

const client = new ScreenshotsPagepixels('your-api-key');
client.getScreenshotConfig('your-screenshot-config-id')
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });
```

### `updateScreenshotConfig(id,options = {})`
Updates a specific screenshot configuration.

```javascript
const ScreenshotsPagepixels = require('pagepixels-screenshots');

const client = new ScreenshotsPagepixels('your-api-key');
const options = { scheduled_every: 2 };
client.updateScreenshotConfig('your-screenshot-config-id', options)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });
```

### `deleteScreenshotConfig(id)`
Deletes a specific screenshot configuration.

```javascript
const ScreenshotsPagepixels = require('pagepixels-screenshots');

const client = new ScreenshotsPagepixels('your-api-key');
client.deleteScreenshotConfig('your-screenshot-config-id')
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });
```

### `screenshotConfigScreenshots(id, options = {})`
Retrieves a list of screenshots that were taken with a specific screenshot configuration.

```javascript
const ScreenshotsPagepixels = require('pagepixels-screenshots');

const client = new ScreenshotsPagepixels('your-api-key');
client.screenshotConfigScreenshots('your-screenshot-config-id')
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });
```

### `screenshotConfigChangeNotifications(id, options = {})`
Provides an array of all Change Notifications for a specific screenshot configuration.

Learn more about configuring change notifications for your screenshots here: 

https://pagepixels.com/app/documentation#screenshot-change-notifications

```javascript
const ScreenshotsPagepixels = require('pagepixels-screenshots');

const client = new ScreenshotsPagepixels('your-api-key');
client.screenshotConfigChangeNotifications('your-screenshot-config-id')
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });
```

### `jobStatus(job_id)`
Retrieves the status of a specific screenshot job associated with a screenshot configuration.

```javascript
const ScreenshotsPagepixels = require('pagepixels-screenshots');

const client = new ScreenshotsPagepixels('your-api-key');
client.jobStatus('your-job-id')
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });
```

### `captureScreenshot(id)`
Immediately captures a screenshot using a specific screenshot configuration. This bypasses all scheduling to take a screenshot immediately.

```javascript
const ScreenshotsPagepixels = require('pagepixels-screenshots');

const client = new ScreenshotsPagepixels('your-api-key');
client.captureScreenshot('your-screenshot-config-id')
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });
```

### `screenshots(options = {})`
Retrieves a list of all screenshots taken with your PagePixels account.

```javascript
const ScreenshotsPagepixels = require('pagepixels-screenshots');

const client = new ScreenshotsPagepixels('your-api-key');
client.screenshots()
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });
```

### `changeNotifications(options = {})`
Provides an array of all Change Notifications for all screenshot configurations.

```javascript
const ScreenshotsPagepixels = require('pagepixels-screenshots');

const client = new ScreenshotsPagepixels('your-api-key');
client.changeNotifications()
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });
```

# Some additional helpful information.

## Scheduling
With PagePixels, you can schedule recurring screenshots of your web pages. You can schedule screenshots through the user interface as well if needed.

The following options are available for scheduling:

| Option               | Expected Value        |
| --------------------| ----------------------|
| scheduled_screenshot | true or false         |
| scheduled_every      | Integer greater than 1|
| scheduled_interval   | Any of: minutes, hours, days, weeks, months, years |

## Multi-Step Screenshots
PagePixels also provides the ability to use multi-step functionality to complete forms, navigate to different pages, click links and buttons, and login to your favorite websites prior to taking your screenshot.

Learn more about how to configure multi-step actions for your screenshots here: 

https://pagepixels.com/app/documentation#multi-step-screenshots

The following actions are available for use with the multi-step functionality:

| Action                   | Example                                                            |
| ------------------------| -------------------------------------------------------------------|
| Click                    | {"type": "click", "selector": "#your-selector"}                    |
| Hover                    | {"type": "hover", "selector": "#your-selector"}                    |
| Change Notification      | {"type": "change", "selector": "#your-selector", "send_to": "webhook", url: "https://example.com/webhook-url"} |
| Goto URL                 | {"type": "redirect", "value": "https://example.com"}               |
| Run Javascript           | {"type": "javascript", "value": "console.log('my javascript');"}    |
| Insert CSS               | {"type": "css", "value": "#selector{ color: red }"}                 |
| Text Field Input         | {"type": "text_field", "selector": "#the-text-field", "value": "your-value"} |
| Dropdown Field Selection | {"type": "select", "selector": "#the-dropdown-field", "value": "selected value"} |
| Checkbox Field Input     | {"type": "checkbox", "selector": "#the-checkbox-field", "value":true} |
| Press Enter              | (to submit hidden forms) {"type": "submit"}                         |
| Wait X milliseconds      | {"type": "wait", "value": "5000"}                                   |
| Wait for Selector        | {"type": "wait_for_selector", "selector": "#your-selector"}         |
