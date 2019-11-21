import React from "react";
import identity from "../../images/identity.svg";
import functions from "../../images/functions.svg";
import forms from "../../images/forms.svg";
import media from "../../images/media.svg";
import "./block.scss";

const Block = () => {
  return (
    <div className="block">
      <div className="block-grid">
        <div className="block-image">
          <img src={identity} alt="identity" />
        </div>
        <div className="block-text">
          <h1>Identity</h1>
          <h3>
            Manage signups, logins, password recovery, and more — all without
            rolling your own authentication service.
          </h3>
          <p>
            Register and authenticate visitors to your site so you can gate
            content, enable CMS functionality, make authenticated calls to
            outside services, and more. Securely integrate with any service that
            understands JSON Web Tokens.
          </p>
          <div className="block-link">
            <span>Learn more →</span>
          </div>
        </div>
      </div>
      <div className="block-grid">
        <div className="block-text">
          <h1>Functions</h1>
          <h3>
            Deploy AWS Lambda functions without configuring API gateways,
            coordinating deployments, or setting up an AWS account.
          </h3>
          <p>
            Your functions are version-controlled, built, and deployed along
            with the rest of your Isodigify site, and the Isodigify API gateway
            automatically handles service discovery. Plus, your functions
            benefit from the power of Deploy Previews and rollbacks.
          </p>
          <div className="block-link">
            <span>Learn more →</span>
          </div>
        </div>
        <div className="block-image">
          <img src={functions} alt="functions" />
        </div>
      </div>
      <div className="block-grid">
        <div className="block-image">
          <img src={forms} alt="forms" />
        </div>
        <div className="block-text">
          <h1>Forms</h1>
          <h3>
            Manage forms and submissions without any server-side code or
            JavaScript.
          </h3>
          <p>
            Code an HTML form into any page on your site, add a Isodigify
            attribute to the tag, and you’ll receive submissions in your
            Isodigify dashboard. HTML files are parsed directly at deploy time,
            so there’s no need for you to make an API call or include extra
            JavaScript on your site.
          </p>
          <div className="block-link">
            <span>Learn more →</span>
          </div>
        </div>
      </div>
      <div className="block-grid">
        <div className="block-text">
          <h1>Large Media</h1>
          <h3>
            Manage binary files of any size right in your repo, just like code.
          </h3>
          <p>
            Isodigify Large Media makes it easy to handle larger assets from the
            first Git check in through to final delivery. Version control files
            many gigabytes in size and dynamically resize images on the fly as
            they are served.
          </p>
          <div className="block-link">
            <span>Learn more →</span>
          </div>
        </div>
        <div className="block-image">
          <img src={media} alt="media" />
        </div>
      </div>
    </div>
  );
};

export default Block;
