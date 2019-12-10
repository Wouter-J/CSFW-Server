import { async } from '@angular/core/testing';
import { Observable, of as observableOf, throwError } from 'rxjs';

import {Component} from '@angular/core';
import {UseCase} from './usecase.model';

describe('UseCase', () => {
  let obj;

  beforeEach(() => {
    obj = new UseCase({}, {}, {}, {}, {}, {});
  });

});
