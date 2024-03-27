using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace lab1._1
{
    public delegate void SimpleDelgate();
     class Delegate
    {
        static void Main(string[] args)
        {
            SimpleDelgate d = new (MyFunc);

            d();
        }

        public static void MyFunc()
        {
            Console.WriteLine("I was called by delegate");
        }

    
    }
}
