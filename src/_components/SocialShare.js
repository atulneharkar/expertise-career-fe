import React, { Component } from 'react';
import {
  ShareButtons,
  generateShareIcon
} from 'react-share';

const {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton
} = ShareButtons;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');
const WhatsappIcon = generateShareIcon('whatsapp');

class SocialShare extends Component {
  render() {
    return (
      <div className="social-share-icons clearfix">
        <div>
          <FacebookShareButton
            url={this.props.shareUrl}
            title={this.props.title}>
            <FacebookIcon
              size={32}
              round />
          </FacebookShareButton>
        </div>

        <div>
          <TwitterShareButton
            url={this.props.shareUrl}
            title={this.props.title}>
            <TwitterIcon
              size={32}
              round />
          </TwitterShareButton>
        </div>

        <div>
          <WhatsappShareButton
            url={this.props.shareUrl}
            title={this.props.title}
            separator=":: ">
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
        </div>

        <div>
          <GooglePlusShareButton
            url={this.props.shareUrl}>
            <GooglePlusIcon
              size={32}
              round />
          </GooglePlusShareButton>
        </div>

        <div>
          <LinkedinShareButton
            url={this.props.shareUrl}
            title={this.props.title}
            windowWidth={750}
            windowHeight={600}>
            <LinkedinIcon
              size={32}
              round />
          </LinkedinShareButton>
        </div>

      </div>
    );
  }
}

export default SocialShare;