import {
  jsonFormatter,
  objectToQueryString
} from "./helpers";

const { Curl } = require("node-libcurl");

export default class WebHooks {

  protected restUrl: string;
  protected licenceUsername: string;
  protected licencePassword: string;
  protected licenceSecretKey: string;

  constructor(parentObj: any) {
    this.restUrl = parentObj.restUrl;
    this.licenceUsername = parentObj.licenceUsername;
    this.licencePassword = parentObj.licencePassword;
    this.licenceSecretKey = parentObj.licenceSecretKey;
  }

  /**
   * This request is used to update webhook settings like url and parameter.
   *
   * @param {string} name The name of the webhook you want to update
   * @param {string} url The url you want to set.
   * @param {string} parameter The parameter you want to set for the webhook.
   * @return {object}
   */
  public updateWebhook(
    name: string,
    url: string,
    parameter: string
  ) {
    const curl = new Curl();
    const terminate = curl.close.bind(curl);

    return new Promise((resolve, reject) => {
      curl.setOpt(Curl.option.URL, `${this.restUrl}/srv/service/`);
      curl.setOpt(Curl.option.POST, true);
      curl.setOpt(
        Curl.option.POSTFIELDS,
        objectToQueryString({
          licence_username: this.licenceUsername,
          licence_password: this.licencePassword,
          request: "update_webhook",
          name: name,
          url: url,
          parameter: parameter
        })
      );

      curl.on("end", (statusCode: any, data: any, headers: any) => {
        resolve(jsonFormatter(data));
      });

      curl.on("error", (statusCode: any, data: any, headers: any) => {
        terminate();
        reject(jsonFormatter(data));
      });

      curl.perform();
    });
  }
}
