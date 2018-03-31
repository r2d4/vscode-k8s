import * as vscode from 'vscode';

// import cp = require('child_process');


export function skaffoldRun() {
    const terminal = vscode.window.createTerminal(`shell: skaffold run`);
    terminal.sendText(`skaffold run`);
    terminal.show()
}
