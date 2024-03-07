
/* IMPORT */

import {spawn} from 'node:child_process';
import vscode from 'vscode';
import {getActiveFilePath, getProjectRootPaths, isInsiders} from 'vscode-extras';
import {isString} from './utils';

/* MAIN */

const open = ( insiders?: boolean ): void => {

  const filePath = getActiveFilePath ();
  const folderPaths = getProjectRootPaths ();
  const targetPaths = [...folderPaths, filePath].filter ( isString );

  const app = insiders ?? isInsiders () ? 'code-insiders' : 'code';

  if ( !targetPaths.length ) return void vscode.window.showErrorMessage ( `You have to open a file or project before being able to open it in "${app}"` );

  spawn ( app, targetPaths, { detached: true } );

};

const openInsiders = (): void => {

  return open ( true );

};

/* EXPORT */

export {open, openInsiders};
