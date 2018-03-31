'use strict';
import * as vscode from 'vscode';
import { skaffoldRun } from './commands/skaffold/run';
import { skaffoldDev } from './commands/skaffold/dev';

export function activate(ctx: vscode.ExtensionContext) {
    ctx.subscriptions.push(vscode.commands.registerCommand('k8s.skaffoldRun', skaffoldRun));
    ctx.subscriptions.push(vscode.commands.registerCommand('k8s.skaffoldDev', skaffoldDev));
}

export function deactivate() {}
