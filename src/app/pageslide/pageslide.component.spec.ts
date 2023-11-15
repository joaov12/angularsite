import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageslideComponent } from './pageslide.component';

describe('PageslideComponent', () => {
  let component: PageslideComponent;
  let fixture: ComponentFixture<PageslideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageslideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageslideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
