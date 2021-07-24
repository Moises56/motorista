import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { UseClienteService } from '../../services/use-cliente.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isCollapsed = false;
  faBars = faBars;

  constructor(public useClienteService: UseClienteService) { }

  ngOnInit(): void {
  }

}
