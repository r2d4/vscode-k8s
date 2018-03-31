'use strict';
import * as vscode from 'vscode';
import { skaffoldRun } from './commands/skaffold/run';
import { skaffoldDev } from './commands/skaffold/dev';
import { minikubeStart, minikubeDelete, minikubeStatus, minikubeStop } from './commands/minikube/minikube';

export function activate(ctx: vscode.ExtensionContext) {
    ctx.subscriptions.push(vscode.commands.registerCommand('k8s.skaffoldRun', skaffoldRun));
    ctx.subscriptions.push(vscode.commands.registerCommand('k8s.skaffoldDev', skaffoldDev));

    ctx.subscriptions.push(vscode.commands.registerCommand('k8s.minikubeStart', minikubeStart));
    ctx.subscriptions.push(vscode.commands.registerCommand('k8s.minikubeDelete', minikubeDelete));
    ctx.subscriptions.push(vscode.commands.registerCommand('k8s.minikubeStatus', minikubeStatus));
    ctx.subscriptions.push(vscode.commands.registerCommand('k8s.minikubeStop', minikubeStop));
}

export function deactivate() {}
