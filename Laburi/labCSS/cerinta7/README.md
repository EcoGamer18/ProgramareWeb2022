Exercitiul 7

Se da urmatorul cod HTML:

    <ul class="dialog">
        <li class="alice">Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
        <li class="bob">Sed ut perspiciatis unde omnis iste nat us error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt</li>
        <li class="alice">Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse</li>
    </ul>


Sa se stilizeze acest cod HTML folosind clasele CSS dialog, alice si bob pentru a se obtine un efect vizual ca in figura de mai jos:

![image](https://user-images.githubusercontent.com/54414302/157272630-a8e95eae-197a-4ad8-ba40-7b131fe399b0.png)

Observatii:


- Lista va putea contine mai mult de trei elemente plasate in clasele alice, bob (eventual si alte “personaje”);

- Colturile ferestrei de dialog vor fi rotunjite;

- Fereastra de dialog pentru fiecare personaj va avea o latime si o intaltime minima, valori ce se vor adapta in functie de dimensiunea textului spus de fiecare personaj si de dimensiunile ferestrei browserului;

- Textul din cadrul ferestrei de dialog va fi centrat pe orizontala;

- Daca textul din cadrul unui element al listei este foarte lung, fereastra de dialog “rostita” de alice sau bob se va redimensiona pe latime daca fereastra browserului permite si apoi pe inaltime, pastrand insa constante proportiile colturilor (nu se va redimensiona fereastra de dialog fara pastrarea proportiilor acesteia);

- Avatarele lui alice si bob vor fi incarcate dintr-un sprite (a se vedea problema 4).
