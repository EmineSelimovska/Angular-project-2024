import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProperyListItemComponent } from './propery-list-item.component';

describe('ProperyListItemComponent', () => {
  let component: ProperyListItemComponent;
  let fixture: ComponentFixture<ProperyListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProperyListItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProperyListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
