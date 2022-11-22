module.exports = function(content) {
    console.log("*********************");
    const options = this.getOptions();
    const { from, to } = options;

    const fromRegex = new RegExp(from, "g");
    const newContent = content.replace(fromRegex, to);

    console.log(newContent);

    return newContent;
};