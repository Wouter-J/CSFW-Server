import { async } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { Observable, of as observableOf, throwError } from 'rxjs';

import {Component} from '@angular/core';
import {Guard} from './guard';
import {Router} from '@angular/router';
import {AuthService} from '../service/auth.service';

@Injectable()
class MockRouter {
  navigate = jest.fn();
}

@Injectable()
class MockAuthService {}
describe('Guard', () => {
  let service;

  beforeEach(() => {
    service = new Guard({}, {});
  });

  it('should run #canActivate()', async () => {
    service.authenticationService = service.authenticationService || {};
    service.authenticationService.currentUserValue = 'currentUserValue';
    service.router = service.router || {};
    service.router.navigate = jest.fn();
    service.canActivate({}, {
      url: {}
    });
    // expect(service.router.navigate).toHaveBeenCalled();
  });

});
