import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NihaoComponent } from './nihao.component';

describe('NihaoComponent', () => {
  let component: NihaoComponent;
  let fixture: ComponentFixture<NihaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NihaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NihaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
