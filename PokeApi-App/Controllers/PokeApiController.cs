using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using PokeApi_App.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace PokeApi_App.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PokeApiController : Controller
    {
        //Instancias de las listas del modelo
        List<Result> ListaPokemon = new List<Result>();
        List<Result2> ListarDatosPokemon = new List<Result2>();

        //Get de la Api
        [HttpGet]
        public IEnumerable<Result2> GetPokemon()
        {
            //Proceso para consumir la Api mediante la url y deserializando los objetos por Json
            string url = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0";
            WebClient client = new WebClient();
            var data = client.DownloadString(url);
            var resultado = JsonConvert.DeserializeObject<Root>(data);

            //Foreach para añadir lo consumido por la api a la lista de mi clase modelo
            foreach(var pokemon in resultado.results)
            {
                ListaPokemon.Add(pokemon);
            }

            //Foreach para listar las url con la informacion de todos los pokemons
            foreach(var poke in ListaPokemon)
            {
                //Deserializanddo cada uno de los pokemons mediante su Url de la Api
                var data2 = client.DownloadString(poke.url);
                var resultado2 = JsonConvert.DeserializeObject<Result2>(data2);

                //Añado cada uno de los datos de todos los pokemons que consumí de las apis
                ListarDatosPokemon.Add(resultado2);

            }

            //Retorno la lista de los datos de todos lo pokemons de la PokeApi
            return ListarDatosPokemon;
        }
    }
}
