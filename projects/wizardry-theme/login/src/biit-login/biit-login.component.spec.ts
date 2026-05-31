import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslocoService } from '@ngneat/transloco';

import { BiitLoginComponent } from './biit-login.component';

describe('BiitLoginComponent', () => {
  let component: BiitLoginComponent;
  let fixture: ComponentFixture<BiitLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiitLoginComponent ],
      providers: [
        {
          provide: TranslocoService,
          useValue: {
            translate: (key: string) => key
          }
        }
      ]
    })
    .overrideComponent(BiitLoginComponent, {
      set: { template: '' }
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiitLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('generates a keyId with two characters', () => {
    expect((component as any).keyId.length).toBe(2);
  });
});
