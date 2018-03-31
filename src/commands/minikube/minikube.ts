'use strict';
import * as vscode from 'vscode';

export function minikubeStart()     { minikubeCommand("start"); }
export function minikubeStop()      { minikubeCommand("stop"); }
export function minikubeDelete()    { minikubeCommand("delete"); }
export function minikubeStatus()    { minikubeCommand("status"); }

function minikubeCommand(args: string) {
    const terminal = vscode.window.createTerminal(`shell: minikube`);
    terminal.sendText(`minikube ${args}`);
    terminal.show();
}


