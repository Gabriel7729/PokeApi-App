using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PokeApi_App.Models
{
    public class ModeloPokemon
    {
        public string Name { get; set; }
        public string HabilidadOculta { get; set; }
        public string Habilidad { get; set; }
        public string Height { get; set; }
        public string Order { get; set; }
        public string Weight { get; set; }
        public string Sprite { get; set; }
        public string Type { get; set; }
        public string Type2 { get; set; }
    }

    public class Ability2
    {
        public string name { get; set; }
        public string url { get; set; }
    }

    public class Ability
    {
        public bool is_hidden { get; set; }
        public string slot { get; set; }
        public Ability2 ability { get; set; }
    }

    public class Form
    {
        public string name { get; set; }
        public string url { get; set; }
    }

    public class Version
    {
        public string name { get; set; }
        public string url { get; set; }
    }

    public class GameIndice
    {
        public string game_index { get; set; }
        public Version version { get; set; }
    }

    public class VersionDetail
    {
        public string rarity { get; set; }
        public Version version { get; set; }
    }


    public class Move2
    {
        public string name { get; set; }
        public string url { get; set; }
    }

    public class VersionGroup
    {
        public string name { get; set; }
        public string url { get; set; }
    }

    public class MoveLearnMethod
    {
        public string name { get; set; }
        public string url { get; set; }
    }

    public class VersionGroupDetail
    {
        public string level_learned_at { get; set; }
        public VersionGroup version_group { get; set; }
        public MoveLearnMethod move_learn_method { get; set; }
    }

    public class Move
    {
        public Move move { get; set; }
        public List<VersionGroupDetail> version_group_details { get; set; }
    }

    public class Species
    {
        public string name { get; set; }
        public string url { get; set; }
    }

    public class Sprites
    {
        public string front_default { get; set; }
    }

    public class Type2
    {
        public string name { get; set; }
        public string url { get; set; }
    }

    public class Type
    {
        public string slot { get; set; }
        public Type2 type { get; set; }
    }

    public class Root2
    {

    }

    public class Result2
    {
        public List<Ability> abilities { get; set; }
        public string base_experience { get; set; }
        public List<Form> forms { get; set; }
        public List<GameIndice> game_indices { get; set; }
        public string id { get; set; }
        public bool is_default { get; set; }
        public string location_area_encounters { get; set; }
        public List<Move> moves { get; set; }   
        public string name { get; set; }
        public string order { get; set; }
        public Species species { get; set; }
        public Sprites sprites { get; set; }
        public List<Type> types { get; set; }
        public string weight { get; set; }
        public string Height { get; set; }
    }
}
