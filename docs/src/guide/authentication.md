# Authentication

The API uses token based authentication with OAuth. You will need to request a token to pass when requesting data from the API. Every organization has to request their own API key and secret through the What'sUp 24/7 platform. However, each organization can request multiple keys for different projects.

## Requesting a Token

The URL to request a token is https://api.whatsup247.com/oauth. You will also need to pass the following information:

- **Grant Type:** client_credentials
- **API Key:** Your organization API key
- **API Secret:** Your organization secret for API key pair

When requesting data, token will need to be Authorization Bearer.

## Requesting an API Key & Secret

1. **Login** into the What'sUp 24/7 Platform

2. **Enter** the Organization Dashboard Menu
   ![Image of What'sUp 24/7 side menu](../.vuepress/img/organization-menu.png#image-display)

3. **Select** "Developers" from the sidebar menu
   ![Image of What'sUp 24/7 side menu](../.vuepress/img/developers-link.png#image-display)

4. **Click** "Generate API Key"
   ![Image of Developers Page](../.vuepress/img/developers-page-empty.png#image-display)

## Reviewing Your API Keys

In the developers area, it will keep a list all API keys requested. However, you will need to store the secret for the key immediately after the key's creation because we won't display the secret again. This is what you should see if you API key was successfully generated and stored.

![Image of Developers Page With API key list](../.vuepress/img/developers-page.png#image-display)
