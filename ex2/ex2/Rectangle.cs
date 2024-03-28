using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ex2
{
    internal class Rectangle:Tower
    {
        //Constructor and sending data to the Tower 
        public Rectangle(int height, int width) : base(height, width)
        {
            if (height == width || Math.Abs(height - width) > 5)
            {
                Console.WriteLine(Area());
            }
            else
            {
                Console.WriteLine(Scope());
            }
        }
        public override int Area() { return Height * Width; }
        public override int Scope() { return Width * 2 + Height * 2; }
        

    }
}
