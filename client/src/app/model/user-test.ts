import { async } from '@angular/core/testing';
import { Observable, of as observableOf, throwError } from 'rxjs';

import {Component} from '@angular/core';
import {User} from './user';

describe('User', () => {
  let obj;

  beforeEach(() => {
    obj = new User();
  });

});
