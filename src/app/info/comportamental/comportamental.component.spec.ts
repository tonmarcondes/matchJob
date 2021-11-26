import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComportamentalComponent } from './comportamental.component';

describe('ComportamentalComponent', () => {
  let component: ComportamentalComponent;
  let fixture: ComponentFixture<ComportamentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComportamentalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComportamentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
