'use strict';
import * as vscode from 'vscode';
import * as path from "path";

export function runSkaffold(mode: string, skaffoldFileUri?: vscode.Uri) {
    const terminal = vscode.window.createTerminal(`shell: skaffold ${mode}`);
    var args = "";

    if (skaffoldFileUri) {
        const skaffoldDir = path.dirname(skaffoldFileUri.fsPath);
        const skaffoldFile = path.basename(skaffoldFileUri.fsPath);
        args = `-f ${skaffoldFile}`;
        terminal.sendText(`cd ${skaffoldDir}`);
    }
    
    terminal.sendText(`skaffold ${mode} ${args}`);
    terminal.show();
}
