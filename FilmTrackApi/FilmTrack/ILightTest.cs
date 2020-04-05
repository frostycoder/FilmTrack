using System.Collections.Generic;
using System.Threading.Tasks;

namespace FilmTrack
{
    public interface ILightTest
    {
        Task<List<Light>> RunAsync(int numberOfLights, int numberOfPeople);
    }
}