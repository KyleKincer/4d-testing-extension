import * as vscode from 'vscode';

// WeakMap to associate a tag name with a created TestRunProfile
export const tagByProfile: WeakMap<vscode.TestRunProfile, string> = new WeakMap();
