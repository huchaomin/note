const { path } = require('@vuepress/shared-utils');
module.exports = (options, context) => ({
	define() {
		return {
			BUTTON_STATIC_ICON: options.buttonStaticIcon || false,
			BUTTON_ICON_TITLE: options.buttonIconTitle || 'Copy',
			BUTTON_ALIGN: options.buttonAlign || 'top',
			BUTTON_COLOR: options.buttonColor || '#ffffff'
		}
	},
	enhanceAppFiles: path.resolve(__dirname, 'enhanceAppFile.js'),
	clientRootMixin: path.resolve(__dirname, 'clientRootMixin.js'),
});

