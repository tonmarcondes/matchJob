import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvocacaoComponent } from './convocacao.component';

describe('ConvocacaoComponent', () => {
  let component: ConvocacaoComponent;
  let fixture: ComponentFixture<ConvocacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvocacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvocacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
