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
        List<Result> ListaPokemon = new List<Result>();
        List<Result2> ListarDatosPokemon = new List<Result2>();
        ModeloPokemon pokemon1 = new ModeloPokemon();
        List<ModeloPokemon> ListarLosPokemon = new List<ModeloPokemon>();

        [HttpGet]
        public IEnumerable<Result2> GetPokemon()
        {
            string url = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0";
            WebClient client = new WebClient();
            var data = client.DownloadString(url);
            var resultado = JsonConvert.DeserializeObject<Root>(data);
            foreach(var pokemon in resultado.results)
            {
                ListaPokemon.Add(pokemon);
            }

            foreach(var poke in ListaPokemon)
            {
                var data2 = client.DownloadString(poke.url);
                var resultado2 = JsonConvert.DeserializeObject<Result2>(data2);

                ListarDatosPokemon.Add(resultado2);
                
                
                //foreach (var datosPokemonTipo in ListarDatosPokemon)
                //{
                    
                //    if (datosPokemonTipo.slot == "1")
                //    {
                //        pokemon1.Type = datosPokemonTipo.type.name;
                //        ListarLosPokemon.Add(datosPokemonTipo);
                //    }
                //    else
                //    {
                //        pokemon1.Type2 = datosPokemonTipo.type.name;
                //    }
                //}

            }

            return ListarDatosPokemon;
        }
    }
}
