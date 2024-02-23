import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectedcomponentComponent } from './protectedcomponent.component';

describe('ProtectedcomponentComponent', () => {
  let component: ProtectedcomponentComponent;
  let fixture: ComponentFixture<ProtectedcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProtectedcomponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProtectedcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
