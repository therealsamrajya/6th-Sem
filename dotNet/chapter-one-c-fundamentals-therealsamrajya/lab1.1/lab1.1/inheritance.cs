using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace lab1._1
{

    public interface IClass1
    {
        void Method1();
    }
    public interface IClass2
    {
        void Method2();
    }
    public class Myclass : IClass1,IClass2 {
    public void Method1()
        {
            Console.WriteLine("Hello,I am class one");
        }
        public void Method2()
        {
            Console.WriteLine("Hello,I am class two");
        }
    }

    public class Inheritance
    {
        public static void Main()
        {
            Myclass x = new Myclass();
            x.Method1();
            x.Method2 ();
        }

    }
}
