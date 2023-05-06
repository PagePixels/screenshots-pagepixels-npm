const http = require('http');
const https = require('https');

class ScreenshotsPagepixels {
  constructor(bearerToken) {
    this.bearerToken = bearerToken;
    this.apiBaseUrl = 'https://api.pagepixels.com';
  }

  async request(method, path, options = {}, body = null) {
    const url = new URL(this.apiBaseUrl + path);
    const isHttps = url.protocol === 'https:';

    const requestOptions = {
      method,
      hostname: url.hostname,
      path: url.pathname + url.search,
      headers: {
        'Authorization': `Bearer ${this.bearerToken}`,
      },
    };

    if (body) {
      requestOptions.headers['Content-Type'] = 'application/json';
      body = JSON.stringify(body);
      requestOptions.headers['Content-Length'] = Buffer.byteLength(body);
    }

    return new Promise((resolve, reject) => {
      const req = (isHttps ? https : http).request(requestOptions, res => {
        let data = '';
        res.on('data', chunk => {
          data += chunk;
        });
        res.on('end', () => {
          if (res.statusCode >= 200 && res.statusCode < 300) {
            if (path === '/snap' && !options.json) {
              resolve(data);
            } else {
              resolve(JSON.parse(data));
            }
          } else {
            reject(new Error(`Request failed with status ${res.statusCode}`));
          }
        });
      });

      req.on('error', error => {
        reject(error);
      });

      if (body) {
        req.write(body);
      }

      req.end();
    });
  }

  snap(options = {}) {
    return this.request('GET', '/snap', options);
  }

  screenshotConfigs(options = {}) {
    return this.request('GET', '/screenshot_configs', options);
  }

  createScreenshotConfig(options = {}) {
    return this.request('POST', '/screenshot_configs', {}, options);
  }

  getScreenshotConfig(id) {
    return this.request('GET', `/screenshot_configs/${id}`);
  }

  updateScreenshotConfig(id, options = {}) {
    return this.request('PATCH', `/screenshot_configs/${id}`, {}, options);
  }

  deleteScreenshotConfig(id) {
    return this.request('DELETE', `/screenshot_configs/${id}`);
  }

  screenshotConfigScreenshots(id, options = {}) {
    return this.request('GET', `/screenshot_configs/${id}/screenshots`, options);
  }

  screenshotConfigChangeNotifications(id, options = {}) {
    return this.request('GET', `/screenshot_configs/${id}/change_notifications`, options);
  }

  jobStatus(job_id) {
    return this.request('GET', `/jobs/${job_id}`);
  }

  captureScreenshot(id) {
    return this.request('POST', `/screenshot_configs/${id}/capture`);
  }

  screenshots(options = {}) {
    return this.request('GET', '/screenshots', options);
  }

  changeNotifications(options = {}) {
    return this.request('GET', '/change_notifications', options);
  }
}

module.exports = ScreenshotsPagepixels;
