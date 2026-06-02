import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRendererExampleComponent } from './form-renderer-example.component';

describe('FormRendererExampleComponent', () => {
  let component: FormRendererExampleComponent;
  let fixture: ComponentFixture<FormRendererExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormRendererExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormRendererExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
