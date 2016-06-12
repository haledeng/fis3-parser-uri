var path = require('path');
var projectPath = fis.project.getProjectPath();
module.exports = function(content, file, opt) {
	var name = opt.name || '__uri';
	var lang = fis.compile.lang;
	return content.replace(new RegExp(name + '\\([\'\"]([^\'\"]*?)[\'\"]\\)', 'ig'), function(all, value) {
		value = path.join(projectPath, value);
		return fis.file.wrap(value).getContent();
	});
};