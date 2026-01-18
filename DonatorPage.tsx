import { Crown, Sparkles, Zap, MessageCircle, Shield, Headphones } from 'lucide-react';
import { motion } from 'motion/react';

const tiers = [
  {
    name: 'VIP',
    icon: Crown,
    color: 'from-purple-500 to-pink-500',
    features: [
      { icon: MessageCircle, text: 'Access to exclusive chat' },
      { icon: Shield, text: 'Custom badge on Discord server (VIP)' }
    ],
    popular: false
  },
  {
    name: 'VIP+',
    icon: Sparkles,
    color: 'from-yellow-400 to-orange-500',
    features: [
      { icon: MessageCircle, text: 'Access to exclusive chat' },
      { icon: Shield, text: 'Custom badge on Discord server (VIP+)' }
    ],
    popular: true
  },
  {
    name: 'Donator',
    icon: Zap,
    color: 'from-cyan-400 to-blue-500',
    features: [
      { icon: MessageCircle, text: 'Exclusive chat' },
      { icon: Shield, text: 'Custom badge on Discord server (Donator)' },
      { icon: Headphones, text: 'Fast support' }
    ],
    popular: false
  }
];

export function DonatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-cyan-500/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            5T Services
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join our exclusive community and unlock premium benefits
          </p>
        </motion.div>

        {/* Tier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                    POPULAR
                  </span>
                </div>
              )}
              
              <div className={`
                relative h-full bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 
                border-2 border-transparent hover:border-opacity-50 transition-all duration-300
                ${tier.popular ? 'md:scale-105 border-yellow-500/50' : 'hover:scale-105'}
                shadow-2xl
              `}>
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tier.color} opacity-10 rounded-2xl`} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${tier.color} mb-6 shadow-lg`}>
                    <tier.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl font-bold text-white mb-6">{tier.name}</h3>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <feature.icon className={`w-5 h-5 mt-0.5 flex-shrink-0 bg-gradient-to-br ${tier.color} bg-clip-text text-transparent`} style={{ stroke: 'url(#gradient)' }} />
                        <span className="text-gray-300">{feature.text}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Subscribe Button */}
                  <a
                    href="https://discord.gg/CRFPEbnmX6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      block w-full text-center py-4 rounded-xl font-bold text-white
                      bg-gradient-to-r ${tier.color} 
                      hover:shadow-2xl hover:scale-105 transition-all duration-300
                      relative overflow-hidden group
                    `}
                  >
                    <span className="relative z-10">Subscribe Now</span>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  </a>
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-shine" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400">
            Click "Subscribe Now" to join our Discord and get started
          </p>
        </motion.div>
      </div>

      <style>{`
        @keyframes shine {
          from {
            transform: translateX(-100%) skewX(-12deg);
          }
          to {
            transform: translateX(200%) skewX(-12deg);
          }
        }
        .animate-shine {
          animation: shine 3s infinite;
        }
      `}</style>
    </div>
  );
}
