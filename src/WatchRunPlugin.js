class WatchRunPlugin {
    constructor(options = {}) {
        this.options = { ...options };
    }
    apply(compiler) {
        const separator = this.options.separator;

        compiler.hooks.watchRun.tap( // Executes a plugin during watch mode after a new compilation is triggered but before the compilation is actually started.
            'watch-run-plugin',
            (compiler) => {
                const { modifiedFiles, removedFiles } = compiler;

                if (modifiedFiles) {
                    for (let modifiedFile of modifiedFiles) {
                        console.log(`\nFile modified${separator} `, modifiedFile);
                    }
                }
                if (removedFiles) {
                    for (let removedFile of removedFiles) {
                        console.log(`\nFile removed${separator} `, removedFile);
                    }
                }
            }
        );
    }
}

module.exports = WatchRunPlugin;