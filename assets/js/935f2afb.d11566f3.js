"use strict";(self.webpackChunk_betterdiscord_docs=self.webpackChunk_betterdiscord_docs||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"usersSidebar":[{"type":"link","label":"Welcome","href":"/users/","docId":"users/index"},{"type":"category","label":"Introduction","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"What is BetterDiscord?","href":"/users/introduction/betterdiscord","docId":"users/introduction/betterdiscord"},{"type":"link","label":"Installation","href":"/users/introduction/installation","docId":"users/introduction/installation"},{"type":"link","label":"Installing Addons","href":"/users/introduction/installing-addons","docId":"users/introduction/installing-addons"}],"href":"/users/introduction"},{"type":"category","label":"Troubleshooting","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Installation Issues","href":"/users/troubleshooting/installation-issues","docId":"users/troubleshooting/installation-issues"},{"type":"link","label":"Crashes","href":"/users/troubleshooting/crashes","docId":"users/troubleshooting/crashes"},{"type":"link","label":"FAQ","href":"/users/troubleshooting/faq","docId":"users/troubleshooting/faq"}],"href":"/users/troubleshooting"},{"type":"category","label":"Addons","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Submitting Addons","href":"/users/addons/submitting","docId":"users/addons/submitting"},{"type":"link","label":"Approval System","href":"/users/addons/approval","docId":"users/addons/approval"},{"type":"link","label":"Updating","href":"/users/addons/updating","docId":"users/addons/updating"}],"href":"/users/addons"}],"pluginsSidebar":[{"type":"link","label":"Welcome","href":"/plugins/","docId":"plugins/index"},{"type":"category","label":"Introduction","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Quick Start","href":"/plugins/introduction/quick-start","docId":"plugins/introduction/quick-start"},{"type":"link","label":"Developer Tools","href":"/plugins/introduction/devtools","docId":"plugins/introduction/devtools"},{"type":"link","label":"Environment","href":"/plugins/introduction/environment","docId":"plugins/introduction/environment"},{"type":"link","label":"Plugin Structure","href":"/plugins/introduction/structure","docId":"plugins/introduction/structure"},{"type":"link","label":"Guidelines","href":"/plugins/introduction/guidelines","docId":"plugins/introduction/guidelines"}],"href":"/plugins/introduction"},{"type":"category","label":"Basics","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Creating a Plugin","href":"/plugins/basics/creating-a-plugin","docId":"plugins/basics/creating-a-plugin"},{"type":"link","label":"Using the DOM","href":"/plugins/basics/dom","docId":"plugins/basics/dom"},{"type":"link","label":"Plugin Settings","href":"/plugins/basics/settings","docId":"plugins/basics/settings"},{"type":"link","label":"UI Components","href":"/plugins/basics/ui","docId":"plugins/basics/ui"},{"type":"link","label":"Addon Interaction","href":"/plugins/basics/addons","docId":"plugins/basics/addons"},{"type":"link","label":"Changing Discord","href":"/plugins/basics/discord","docId":"plugins/basics/discord"}],"href":"/plugins/basics"},{"type":"category","label":"Intermediate","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"React","href":"/plugins/intermediate/react","docId":"plugins/intermediate/react"},{"type":"link","label":"Webpack","href":"/plugins/intermediate/webpack","docId":"plugins/intermediate/webpack"}],"href":"/plugins/intermediate"},{"type":"category","label":"Advanced","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Addon Interaction","href":"/plugins/advanced/patching","docId":"plugins/advanced/patching"},{"type":"link","label":"Webpack Modules","href":"/plugins/advanced/webpack","docId":"plugins/advanced/webpack"},{"type":"link","label":"React Injection","href":"/plugins/advanced/react","docId":"plugins/advanced/react"}],"href":"/plugins/advanced"}],"themesSidebar":[{"type":"link","label":"Welcome","href":"/themes/","docId":"themes/index"},{"type":"category","label":"Introduction","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Quick Start","href":"/themes/introduction/quick-start","docId":"themes/introduction/quick-start"},{"type":"link","label":"Developer Tools","href":"/themes/introduction/devtools","docId":"themes/introduction/devtools"},{"type":"link","label":"Theme Structure","href":"/themes/introduction/structure","docId":"themes/introduction/structure"},{"type":"link","label":"Guidelines","href":"/themes/introduction/guidelines","docId":"themes/introduction/guidelines"}],"href":"/category/introduction"}],"apiSidebar":[{"type":"link","label":"Welcome","href":"/api/","docId":"api/index"},{"type":"link","label":"AddonAPI","href":"/api/addonapi","docId":"api/addonapi"},{"type":"link","label":"BdApi","href":"/api/bdapi","docId":"api/bdapi"},{"type":"link","label":"Filters","href":"/api/filters","docId":"api/filters"},{"type":"link","label":"Patcher","href":"/api/patcher","docId":"api/patcher"},{"type":"link","label":"Webpack","href":"/api/webpack","docId":"api/webpack"}],"discordSidebar":[{"type":"link","label":"Welcome","href":"/discord/","docId":"discord/index"},{"type":"link","label":"Known Modules","href":"/discord/modules","docId":"discord/modules"},{"type":"link","label":"Discord UI","href":"/discord/ui","docId":"discord/ui"}]},"docs":{"api/addonapi":{"id":"api/addonapi","title":"AddonAPI","description":"AddonAPI is a utility class for working with plugins and themes. Instances are accessible through the BdApi.","sidebar":"apiSidebar"},"api/bdapi":{"id":"api/bdapi","title":"BdApi","description":"BdApi is a globally (window.BdApi) accessible object for use by plugins and developers to make their lives easier.","sidebar":"apiSidebar"},"api/filters":{"id":"api/filters","title":"Filters","description":"Series of Filters to be used for finding webpack modules.","sidebar":"apiSidebar"},"api/index":{"id":"api/index","title":"Plugin API","description":"If you\'re looking for a tutorial or a guide on how to actually make plugins, you should take a look at our plugin guide instead! Otherwise, if you\'re just looking for a quick reference point for the API, take a look at BdApi","sidebar":"apiSidebar"},"api/patcher":{"id":"api/patcher","title":"Patcher","description":"Patcher is a utility class for modifying existing functions. Instance is accessible through the BdApi.","sidebar":"apiSidebar"},"api/webpack":{"id":"api/webpack","title":"Webpack","description":"Webpack is a utility class for getting internal webpack modules. Instance is accessible through the BdApi.\\rThis is extremely useful for interacting with the internals of Discord.","sidebar":"apiSidebar"},"discord/index":{"id":"discord/index","title":"Discord Internals","description":"If you\'re looking for a tutorial or a guide on how to actually use Discord Internals, you should take a look at our plugin guide instead! Otherwise, if you\'re just looking for a quick reference point for the API, take a look at Known Modules","sidebar":"discordSidebar"},"discord/modules":{"id":"discord/modules","title":"Known Modules","description":"Internal module reference.","sidebar":"discordSidebar"},"discord/ui":{"id":"discord/ui","title":"Discord UI","description":"Internal UI references.","sidebar":"discordSidebar"},"index":{"id":"index","title":"BetterDiscord Documentation","description":"Documentation is still under construction. Some links may either work improperly or not be added."},"plugins/advanced/patching":{"id":"plugins/advanced/patching","title":"Addon Interaction","description":"Patch other functions with your function.","sidebar":"pluginsSidebar"},"plugins/advanced/react":{"id":"plugins/advanced/react","title":"React Injection","description":"React but in reverse.","sidebar":"pluginsSidebar"},"plugins/advanced/webpack":{"id":"plugins/advanced/webpack","title":"Webpack Modules","description":"Webpack but extraction.","sidebar":"pluginsSidebar"},"plugins/basics/addons":{"id":"plugins/basics/addons","title":"Addon Interaction","description":"Work with other addons.","sidebar":"pluginsSidebar"},"plugins/basics/creating-a-plugin":{"id":"plugins/basics/creating-a-plugin","title":"Creating a Plugin","description":"A guide to the basics.","sidebar":"pluginsSidebar"},"plugins/basics/discord":{"id":"plugins/basics/discord","title":"Changing Discord","description":"Modifying existing parts of Discord.","sidebar":"pluginsSidebar"},"plugins/basics/dom":{"id":"plugins/basics/dom","title":"Using the DOM","description":"How to use DOM manipulation.","sidebar":"pluginsSidebar"},"plugins/basics/settings":{"id":"plugins/basics/settings","title":"Plugin Settings","description":"How to have settings in your plugin.","sidebar":"pluginsSidebar"},"plugins/basics/ui":{"id":"plugins/basics/ui","title":"UI Components","description":"All about UI.","sidebar":"pluginsSidebar"},"plugins/index":{"id":"plugins/index","title":"Welcome","description":"This documentation and the accompanying guides assume you already know JavaScript and are familiar with the modern JavaScript constructs and concepts. If you\'re not, check out the resources section below!","sidebar":"pluginsSidebar"},"plugins/intermediate/react":{"id":"plugins/intermediate/react","title":"React","description":"Learning to use React in a plugin.","sidebar":"pluginsSidebar"},"plugins/intermediate/webpack":{"id":"plugins/intermediate/webpack","title":"Webpack","description":"Learning to use Webpack in a plugin.","sidebar":"pluginsSidebar"},"plugins/introduction/devtools":{"id":"plugins/introduction/devtools","title":"Developer Tools","description":"Learn the tools of the trade.","sidebar":"pluginsSidebar"},"plugins/introduction/environment":{"id":"plugins/introduction/environment","title":"Environment","description":"The development environment.","sidebar":"pluginsSidebar"},"plugins/introduction/guidelines":{"id":"plugins/introduction/guidelines","title":"Guidelines","description":"Rules for all plugins.","sidebar":"pluginsSidebar"},"plugins/introduction/quick-start":{"id":"plugins/introduction/quick-start","title":"Quick Start","description":"Get started fast.","sidebar":"pluginsSidebar"},"plugins/introduction/structure":{"id":"plugins/introduction/structure","title":"Plugin Structure","description":"The requirements and format of a plugin.","sidebar":"pluginsSidebar"},"themes/index":{"id":"themes/index","title":"Welcome","description":"I got nothing","sidebar":"themesSidebar"},"themes/introduction/devtools":{"id":"themes/introduction/devtools","title":"Developer Tools","description":"These are tools that help with both general web development, and working with the React UI library.","sidebar":"themesSidebar"},"themes/introduction/guidelines":{"id":"themes/introduction/guidelines","title":"Guidelines","description":"These are guidelines that all themes are expected to abide by. Any themes that violates these will not be added to the BetterDiscord website or marked as official or approved in any fashion. Existing themes that push updates that violate these guidelines will have their updates denied.","sidebar":"themesSidebar"},"themes/introduction/quick-start":{"id":"themes/introduction/quick-start","title":"Quick Start","description":"Quick Start","sidebar":"themesSidebar"},"themes/introduction/structure":{"id":"themes/introduction/structure","title":"Theme Structure","description":"Details","sidebar":"themesSidebar"},"users/addons/approval":{"id":"users/addons/approval","title":"Approval System","description":"Overview of the whole system.","sidebar":"usersSidebar"},"users/addons/submitting":{"id":"users/addons/submitting","title":"Submitting Addons","description":"Quick submission guide.","sidebar":"usersSidebar"},"users/addons/updating":{"id":"users/addons/updating","title":"Updating","description":"How to push out an update.","sidebar":"usersSidebar"},"users/index":{"id":"users/index","title":"Welcome","description":"This documentation assumes you have basic computer literacy!","sidebar":"usersSidebar"},"users/introduction/betterdiscord":{"id":"users/introduction/betterdiscord","title":"What is BetterDiscord?","description":"A really good question.","sidebar":"usersSidebar"},"users/introduction/installation":{"id":"users/introduction/installation","title":"Installation","description":"Quick guide to getting BetterDiscord.","sidebar":"usersSidebar"},"users/introduction/installing-addons":{"id":"users/introduction/installing-addons","title":"Installing Addons","description":"How to extend BetterDiscord.","sidebar":"usersSidebar"},"users/troubleshooting/crashes":{"id":"users/troubleshooting/crashes","title":"Crashes","description":"What to do when your Discord crashes.","sidebar":"usersSidebar"},"users/troubleshooting/faq":{"id":"users/troubleshooting/faq","title":"FAQ","description":"Questions asked frequently.","sidebar":"usersSidebar"},"users/troubleshooting/installation-issues":{"id":"users/troubleshooting/installation-issues","title":"Installation Issues","description":"What to do when you can\'t install.","sidebar":"usersSidebar"}}}')}}]);