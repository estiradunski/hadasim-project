using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ex2
{
    internal abstract class Tower
    {
        private int height; // Private height field
        public int Width { get; set; } // Public Width property

        // A constructor that is used for inheriting classes
        public Tower(int h, int w)
        {
            height = h;
            Width = w;
        }

        // Public property to access the height
        public int Height
        {
            get { return height; }
        }
        public abstract int Area();
        public abstract int Scope();
    }
}
