import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamlitpageComponent } from './streamlitpage.component';

describe('StreamlitpageComponent', () => {
  let component: StreamlitpageComponent;
  let fixture: ComponentFixture<StreamlitpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreamlitpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamlitpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
