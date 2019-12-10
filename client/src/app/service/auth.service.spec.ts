import { async } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { Observable, of as observableOf, throwError } from 'rxjs';

import {Component} from '@angular/core';
import {AuthService} from './auth.service';
import {HttpClient} from '@angular/common/http';

@Injectable()
class MockHttpClient {
  post = jest.fn();
}
describe('AuthService', () => {
  let service;

  beforeEach(() => {
    service = new AuthService({});
  });

  it('should run #login()', async () => {
    service.http = service.http || {};
    service.http.post = jest.fn().mockReturnValue(observableOf('post'));
    service.currentUserSubject = service.currentUserSubject || {};
    service.currentUserSubject.next = jest.fn();
    service.login({}, {});
    // expect(service.http.post).toHaveBeenCalled();
    // expect(service.currentUserSubject.next).toHaveBeenCalled();
  });

  it('should run #logout()', async () => {
    service.currentUserSubject = service.currentUserSubject || {};
    service.currentUserSubject.next = jest.fn();
    service.logout();
    // expect(service.currentUserSubject.next).toHaveBeenCalled();
  });

});
