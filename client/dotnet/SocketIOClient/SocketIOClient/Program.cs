using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SocketIOClient
{
    class Program
    {
        static void Main(string[] args)
        {
            SocketIOHandler socketHandler = new SocketIOHandler("http://localhost:3000");
        }
    }
}
