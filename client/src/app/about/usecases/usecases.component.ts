import { Component, OnInit } from '@angular/core'
import { UseCase } from '../usecase.model'

@Component({
  selector: 'app-about-usecases',
  templateUrl: './usecases.component.html',
  styleUrls: ['./usecases.component.css']
})
export class UsecasesComponent implements OnInit {
  readonly PLAIN_USER = 'Reguliere gebruiker'
  readonly ADMIN_USER = 'Administrator'
  readonly NO_USER = 'Gast'

  //TODO: Add atleast 5 more usescases, minimum is 9
  useCases: UseCase[] = [
    {
      id: 'UC-01',
      name: 'Inloggen',
      description: 'Hiermee logt een bestaande gebruiker in.',
      scenario: [
        'Gebruiker vult email en password in en klikt op Login knop.',
        'De applicatie valideert de ingevoerde gegevens.',
        'Indien gegevens correct zijn dan redirect de applicatie naar het startscherm.'
      ],
      actor: this.PLAIN_USER,
      precondition: 'Geen',
      postcondition: 'De actor is ingelogd'
    },
    {
      id: 'UC-02',
      name: 'Registreren',
      description: 'Hiermee kan een gast zich registreren als reguliere gebruiker',
      scenario: [
        'Gast vult naam, wachtwoord & geboorte datum in',
        'Gast klikt op registreren',
        'Indien alle gegevens correct zijn (met een uniek email adres) wordt er een gebruiker aangemaakt'],
      actor: this.NO_USER,
      precondition: 'Geen',
      postcondition: 'Een gebruiker is aangemaakt'
    },
    /*{ 
      id: 'UC-03',
      name: 'Client registreren',
      description: 'Hiermee wordt een nieuwe client geregistreerd in de applicatie',
      scenario: [
        'Gebruiker vult een unieke client naam in',
        'Eventueel worden bestaande producten en services aan de gebruiker gekoppeld',
        'De applicatie valideert de ingevoerde gegevens.',
        'Indien gegevens correct zijn dan redirect de applicatie naar het clientenoverzicht'
      ],
      actor: this.PLAIN_USER,
      precondition: 'De gebruiker is ingelogd',
      postcondition: 'Een nieuwe klant is toegevoegd'
    },
    {
      id: 'UC-04',
      name: 'Client koppelen aan nieuwe service',
      description: 'Hiermee wordt een client gekoppeld aan een nieuwe service',
      scenario: [
        'Gebruiker gaat naar het client overzicht',
        'Gebruiker kiest een id uit',
        'Gebruiker navigeert naar het service overzicht',
        'Gebruiker vult een client id in',
        'De gekozen client wordt toegevoegd aan de bestaande service',
        'De applicatie valideert de ingevoerde gegevens en of de service niet al gekoppeld is',
        'Indien gegevens correct zijn dan redirect de applicatie naar het serviceoverzicht'
      ],
      actor: this.PLAIN_USER,
      precondition: 'De gebruiker is ingelogd, client en service bestaan',
      postcondition: 'Een nieuwe service is gekoppeld aan een client'
    }, */
    {
      id: 'UC-03',
      name: 'Specificaties koppelen aan Hardware',
      description: 'Hiermee wordt een specificatie gekoppeld aan bestaande hardware',
      scenario: [
        'Gebruiker gaat naar het specificatie overzicht',
        'Gebruiker kiest een specificatie uit',
        'Gebruiker navigeert naar het hardware overzicht',
        'De gekozen specificatie wordt toegekend aan de bestaande hardware',
        'De applicatie valideert de ingevoerde gegevens en of de specificatie niet al gekoppeld is',
        'Indien gegevens correct zijn dan redirect de applicatie naar het hardwareoverzicht'
      ],
      actor: this.PLAIN_USER,
      precondition: 'De gebruiker is ingelogd, client en service bestaan',
      postcondition: 'Een nieuwe specificatie is gekoppeld aan een client'
    },
  ]

  constructor() {}

  ngOnInit() {}
}
